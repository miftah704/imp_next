import Head from "next/head"
import { Button, Container, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { useQuery, useMutation } from 'react-query'
import { createPost, getPosts, getPostDetail, updatePostDetail, deletePost } from './api/posts'


export default function Home() {

  const query = useQuery('posts', getPosts)

  return (
    <>
      <Head />
      <body>
        <Container maxW='container.xl' marginTop={"20"}>
          <TableContainer>
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th>Title</Th>
                  <Th>Description</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
              {
                query.data.map((post) => (
                  <Tr key={post.id}>
                    <Td>{post.title}</Td>
                    <Td>{post.description}</Td>
                    <Td><Button colorScheme={'blue'}>Detail</Button></Td>
                  </Tr>
                ))
              }
              </Tbody>
            </Table>
          </TableContainer>
        </Container>
      </body>
    </>
  )
}
