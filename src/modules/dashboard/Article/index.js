import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import AdminArticleCard from "../../../components/Cards/AdminCard";
import { HttpGet } from "../../../config/axios";
import moment from "../../../config/moment";

function ArticleUserPage() {
    const [articles, setArticles] = useState([]);

    async function fetchArticleUser() {
        try {
            let res = await HttpGet('articles/user');

            setArticles(res);
        } catch (error) {
            console.log(error.response.data.message);
        }
    }

    useEffect(() => {
        fetchArticleUser()
    }, [])

    return (
            <Row xs={4} className="dashboard-articles gx-1">
                {
                    articles.length > 0 ? articles.map((article) => {
                        return (
                            <Col key={article.id}>
                                <AdminArticleCard
                                    key={article.id}
                                    createdDate={moment(article.createdAt).format("DD-MMMM-YYYY")}
                                    creatorName={article.user.name}
                                    title={article.title}
                                    content={article.content}
                                    img={article.image}
                                />
                            </Col>

                        )
                    }) : null
                }
            </Row>
    )
}

export default ArticleUserPage;