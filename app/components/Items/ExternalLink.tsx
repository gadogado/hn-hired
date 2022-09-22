interface ExternalLinkProps {
  url: string;
  text: string;
}

export default function ExternalLink({ url, text }: ExternalLinkProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={url}
      className="text-sm italic text-blue-600 hover:cursor-pointer hover:text-blue-700"
    >
      {text}
    </a>
  );
}
