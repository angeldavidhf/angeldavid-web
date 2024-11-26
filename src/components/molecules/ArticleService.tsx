interface IArticleService {
    classIcon: string;
    title: string;
    content: string;
}

export default function ArticleService({ classIcon, title, content }: IArticleService) {
    return (
        <article>
            <span className={`icon ${classIcon}`}></span>
            <div className="content">
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        </article>
    );
}