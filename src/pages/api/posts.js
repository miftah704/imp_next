import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:8000/api'

export const createPost = async (body) => {
    const response = await axios.post(`${BASE_URL}/post`, body)
    return response.data.data
  }

export const getPosts = async () => {
  const response = await axios.get(`${BASE_URL}/posts`)
  return response.data.data
}

export const getPostDetail = async (postId) => {
  const response = await axios.get(`${BASE_URL}/posts/${postId}`)
  return response.data.data
}

export const updatePostDetail = async (body) => {
  const response = await axios.put(`${BASE_URL}/posts`, body)
  return response.data.data
}

export const deletePost = async (postId) => {
  const response = await axios.delete(`${BASE_URL}/posts/${postId}`)
  return response.data.data
}