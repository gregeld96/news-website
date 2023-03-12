import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import ArticleCard from "../../../components/Cards/ArticleCard";
import SectionHeader from "../../../components/Navbars/Section";
import HorizontalSlider from "../../../components/Sliders/HorizontalSlider";
import moment from "../../../config/moment";
import Illustration from '../../../assets/image/Illustration_1.png'
import BaseButton from "../../../components/Buttons/BaseButton";
import { useNavigate } from "react-router-dom";
import { HttpGetWithoutToken } from "../../../config/axios";

function Home() {
    const navigate = useNavigate();
    const [allArticles, setAllArticles] = useState([]);
    const [categories, setCategories] = useState([]);
    const [eachCategory, setEachCategory] = useState([]);

    async function getAllArticles() {
        try {
            let res = await HttpGetWithoutToken('articles/');

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

    async function getFirstArticlesBasedCategory() {
        try {
            let res = await HttpGetWithoutToken(`articles/category?category=${categories[0].slug}`);

            setEachCategory(res);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllArticles();
        getCategories();
    }, [])

    useEffect(() => {
        if(categories.length > 0) getFirstArticlesBasedCategory()
    }, [categories]);
    
    return (
        <div>
            <div className="custom-container">
                <SectionHeader title={"All Articles"} onClick={() => null} />
                <HorizontalSlider 
                    component={allArticles.map((article) => {
                        return (
                            <ArticleCard
                                key={article.id}
                                createdDate={moment(article.createdAt).format("DD-MMMM-YYYY")}
                                creatorName={article.user.name}
                                title={article.title}
                                content={article.content}
                                img={article.image}
                            />
                        )
                    })} />
            </div>

            <div className="text-center community" style={{marginBlock: '50px', padding: '25px', backgroundColor: '#ffffff'}}>
                <Row style={{height: '300px'}} className="align-items-center">
                    <Col md={5}>
                        <img src={Illustration} style={{width: '80%'}} />      
                    </Col>
                    <Col className="container">
                        <p className="title">Wanna write your own articles ?</p>
                        <p className="subheading">Share with us and let others to be inspired and fullfiled by your knowledge</p>
                        <div style={{width: '50%', marginLeft: 'auto', marginRight: 'auto', marginTop: '30px'}}>
                            <BaseButton title={"Join Community"} onClick={() => navigate('/auths/register')} />
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="layout__main container-padding-home">
                {
                    categories.length > 0 ? (
                        <div style={{marginTop: '50px'}}>
                            <SectionHeader title={categories[0].name} onClick={() => null} />
                            <HorizontalSlider 
                                component={eachCategory.map((article) => {
                                    return (
                                        <ArticleCard
                                            key={article.id}
                                            createdDate={moment(article.createdAt).format("DD-MMMM-YYYY")}
                                            creatorName={article.user.name}
                                            title={article.title}
                                            content={article.content}
                                            img={article.image}
                                        />
                                    )
                                })} />
                        </div>
                    ) : null
                }
            </div>
        </div>
    )
}

export default Home;