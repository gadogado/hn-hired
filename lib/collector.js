/*
  Collector requests the specified HN Who's Hiring post and returns an array of comments
  as well as an object that has a record of regexp matches of tokens in config.trends
*/

/* eslint-disable no-unused-expressions */

const axios = require('axios');
const cheerio = require('cheerio');
const config = require('./config');
const fetch = require('isomorphic-fetch');

const firebaseUrl = 'https://hacker-news.firebaseio.com/v0';
const { trends } = config;

const getItemData = async () => {
  /* url */
  const userResp = await fetch(`${firebaseUrl}/user/whoishiring.json`);
  const { submitted } = await userResp.json();
  const itemId = submitted[0]; // batch submitted position
  const postUrl = `https://news.ycombinator.com/item?id=${itemId}`;

  /* date */
  const itemResp = await fetch(`${firebaseUrl}/item/${itemId}.json`);
  const { time, descendants } = await itemResp.json();
  const createdAt = new Date(time * 1000);
  const date = `${createdAt.getMonth() + 1}/${createdAt.getFullYear()}`;
  return { postUrl, date, descendants };
};

async function collector(itemId) {
  const comments = [];
  const commentTrends = {};
  const { postUrl, date, descendants } = await getItemData();
  const totalPages = Math.floor(descendants / 200);

  for (let page = 0; page < totalPages; page++) {
    const resp = await axios.get(postUrl + `&p=${page + 1}`);
    const $ = await cheerio.load(resp.data);
    const elems = await $('img[width=0]');

    elems.each((i, elem) => {
      const comment = $(elem)
        .parent()
        .siblings('td.default')
        .children('.comment')
        .clone()
        .find('.reply')
        .remove()
        .end();
      const commentText = `${comment.html()}`;
      trends.forEach(t => {
        const re = new RegExp(`\\s${t}`, 'i');
        if (commentText.match(re)) {
          Reflect.has(commentTrends, t)
            ? (commentTrends[t] += 1)
            : (commentTrends[t] = 1);
        }
      });
      comments.push({
        text: commentText,
        itemId: new Date().toISOString()
      });
    });
  }

  return { comments, date, commentTrends };
}

module.exports = collector;
