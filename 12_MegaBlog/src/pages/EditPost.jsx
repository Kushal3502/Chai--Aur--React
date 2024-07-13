import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/config";
import { Container, PostForm } from "../components";

function EditPost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((post) => setPost(post));
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return (
    post && (
      <div className="py-8">
        <Container>
          <PostForm post={post} />
        </Container>
      </div>
    )
  );
}
export default EditPost;
