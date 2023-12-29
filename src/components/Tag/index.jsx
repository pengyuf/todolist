import "./module.scss";

export default function Tag({ content, bgColor = 'blue' }) {
  return <div className="tag-item" style={{backgroundColor:bgColor}}>{content}</div>;
}
