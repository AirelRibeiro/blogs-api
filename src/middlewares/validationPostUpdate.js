const validatePost = async (postId) => {
  const post = await blogPostService.findOnePost(postId);
  return post;
};

