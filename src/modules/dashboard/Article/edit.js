import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import BaseButton from "../../../components/Buttons/BaseButton";
import DropdownField from "../../../components/Fields/DropdownField";
import GeneralField from "../../../components/Fields/GeneralField";
import TextField from "../../../components/Fields/TextAreaField";
import UploadPhoto from "../../../components/Fields/UploadPhoto";
import { HttpGet, HttpPost } from "../../../config/axios";


function ArticleEditForm() {
    // Setting
    const param = useParams();

    // State
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [status, setStatus] = useState("");
    const [content, setContent] = useState("");
    const [thumbnail, setThumbnail] = useState(null);
    const [imageUrl, setImageUrl] = useState("");
    const [submit, setSubmit] = useState(false);

    const statusList = [
        {
            name: 'Publish',
            value: 'publish'
        },
        {
            name: 'Draft',
            value: 'draft'
        }
    ]

    const [categoryList, setCategoryList] = useState([]);

    async function getCategory() {
        try {
            let category = await HttpGet('categories/list');

            setCategoryList(category);
        } catch (error) {
            console.log(error)
        }
    }

    async function getArticleDetail() {
        try {
            let res = await HttpGet(`articles/${param.slug}`);

            setTitle(res.title);
            setContent(res.content);
            setStatus({name: res.status, value: res.status});
            setCategory(res.category);
            setImageUrl(res.image)

            console.log(res);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCategory();
        getArticleDetail();

    }, []);

    async function submitArticle(){
        try {
            setSubmit(true);

            const payload = new FormData();

            payload.append('categoryId', category.id);
            payload.append('status', status?.value);
            payload.append('title', title);
            payload.append('content', content);
            payload.append('photo', thumbnail ? thumbnail : null);

            setSubmit(false);
            console.log(res);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <p className="fw-bolder text-center text-white pt-3" style={{fontSize: '1.7em', paddingBottom: '15px'}}>Article Form</p>
            <div className="field__container">
                <GeneralField title={"Title"} disabled={submit} type={'text'} value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>    
            <Row className="field__container">
                <Col>
                    <DropdownField title={"Category"} dropdownValue={category?.name} onChange={(e) => setCategory(e)} itemList={categoryList} />
                </Col>
                <Col>
                    <DropdownField title={"Status"} dropdownValue={status?.value} onChange={(e) => setStatus(e)} itemList={statusList} />
                </Col>
            </Row>
            <Row className="field__container">
                <Col>
                    <TextField disabled={submit} title={"Content"} value={content} onChange={(e) => setContent(e.target.value)} />
                </Col>
                <Col sm={4}>
                    <UploadPhoto title={"Image Thumbnail"} value={thumbnail ? thumbnail.file : ""} logo={thumbnail ? URL.createObjectURL(thumbnail) : imageUrl ? imageUrl : thumbnail} onChange={(e) => setThumbnail(e.target.files[0])} />
                </Col>
            </Row>

            <div className="field__container">
                <BaseButton title={"Submit"} submitting={submit} onClick={() => submitArticle()} disabled={submit} />
            </div>
        </div>
    )
}

export default ArticleEditForm;