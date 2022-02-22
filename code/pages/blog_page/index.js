import React, { useEffect } from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import Logo from "../../components/logo";
import { pHome } from "./home_page.scss";
// import { getPost } from "../../redux/posts/actions";
import postsSaga from "../../redux/posts/saga";
import { env } from "../../configs";
import Loading from "../../components/loading";
import { withLocale } from "../../../modules/localization";

const mapStateToProps = (state) => {
  return {
    isFetched: state.posts.isFetched,
    isLoading: state.posts.isLoading,
    post: state.posts.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // onGetPost: () => {
    onPostsSaga: () => {
      // return dispatch(getPost());
      return dispatch(postsSaga());
    }
  };
};

// const BlogPage = ({ onGetPost, onPostsSaga, isFetched, isLoading, post, locale }) => {
  const BlogPage = ({ onPostsSaga, isFetched, isLoading, post, locale }) => {
  useEffect(() => {
    // !isFetched && onGetPost();
    !isFetched && onPostsSaga();
  }, []);

  const { __, number } = locale;

  return (
    <>
      <Helmet>
        <title>{env.APP_NAME}</title>
      </Helmet>
      {isLoading && <Loading />}
      <div className={pHome}>
        {!isLoading && post && (
          // <div>
          //   <Logo />
          //   <div>{__("Hello")}</div>
          // </div>
          <p>Nafiseh</p>
        )}
      </div>
    </>
  );
};

const BlogPageWrapper = connect(mapStateToProps, mapDispatchToProps)(BlogPage);

export default withLocale(BlogPageWrapper);
