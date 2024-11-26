import ArticleService from "@molecules/ArticleService";

export default function Services() {
    return (
        <section>
            <header className="major">
                <h2>Services</h2>
            </header>
            <div className="features">
                <ArticleService classIcon="fa-gem" title="Portitor ullamcorper" content="Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam." />
            </div>
        </section>
    );
}