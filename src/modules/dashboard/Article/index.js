import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AdminArticleCard from "../../../components/Cards/AdminCard";
import DeleteModal from "../../../components/Modals/DeleteModal";
import { HttpGet, HttpPut } from "../../../config/axios";
import moment from "../../../config/moment";

function ArticleUserPage() {
    const navigate = useNavigate();

    const [articles, setArticles] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [progress, setProgress] = useState(false);

    async function fetchArticleUser() {
        try {
            let res = await HttpGet('articles/user');

            setArticles(res);
        } catch (error) {
            console.log(error.response.data.message);
        }
    }

    async function deleteArticle(){
        try {
            setProgress(true);
            await HttpPut(`articles/delete/${selectedArticle?.id}`);

            setProgress(false);
            setShowModal(false);
            fetchArticleUser();
        } catch (error) {
            setProgress(false)
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
                                    onDelete={() => {
                                        setSelectedArticle(article);
                                        setShowModal(true);
                                    }}
                                    onEdit={() => {
                                        navigate(`/dashboard/articles/edit/${article.slug}`)
                                    }}
                                />
                            </Col>

                        )
                    }) : null
                }

                <DeleteModal open={showModal} title={"Article"} selectedTitle={selectedArticle?.title} onCancel={() => setShowModal(false)} onDelete={() => deleteArticle()} progress={progress} />
            </Row>
    )
}

export default ArticleUserPage;