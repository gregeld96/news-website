import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import ArticleCard from "../../../components/Cards/ArticleCard";
import moment from "../../../config/moment";
import BaseButton from "../../../components/Buttons/BaseButton";
import { useNavigate } from "react-router-dom";
import { HttpGetWithoutToken } from "../../../config/axios";

function CategoriesPage() {
    const navigate = useNavigate();
    const [allArticles, setAllArticles] = useState([]);
    const [categories, setCategories] = useState([]);
    const [tab, setTab] = useState(0);

    async function getAllArticlesBasedCategory() {
        try {
            let res = await HttpGetWithoutToken(`articles/category?category=${categories[tab].slug}`);

            setAllArticles(res);
        } catch (error) {
            console.log(error)
        }
    }

    async function getCategories() {
        try {
            let res = await HttpGetWithoutToken('categories/');

            setCategories(res);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCategories();
    }, [])

    useEffect(() => {
        if(categories.length > 0) getAllArticlesBasedCategory()
    }, [tab, categories]);
    
    return (
        <div>
            <div className="custom-container">
                <Row xs={4}>
                    {
                        categories.map((data, index) => {
                            return (
                                <Col key={data.id}>
                                    <BaseButton title={data.name} disabled={index == tab ? true : false} onClick={() => setTab(index)}  />
                                </Col>
                            )
                        })
                    }
                </Row>
                <Row xs={3} className="gx-1">
                {
                    allArticles.length > 0 ? allArticles.map((article) => {
                        return (
                            <Col key={article.id}>
                                <ArticleCard
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
            </div>
        </div>
    )
}

export default CategoriesPage;