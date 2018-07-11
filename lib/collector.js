/*
  Collector requests the specified HN Who's Hiring post and returns an array of comments
  as well as an object that has a record of regexp matches of tokens in config.trends
*/

/* eslint-disable no-unused-expressions */

const axios = require('axios');
const cheerio = require('cheerio');
const config = require('./config');

const { trends, urls } = config;
const itemUrl = date => {
  const itemId = urls[date];
  if (!itemId) throw new Error('Invalid item id.');
  return `https://news.ycombinator.com/item?id=${itemId}`;
};

async function collector(date) {
  const comments = [];
  const commentTrends = {};
  const url = await itemUrl(date);
  const resp = await axios.get(url);
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

  return { comments, commentTrends };
}

module.exports = collector;
