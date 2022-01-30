import { client } from '../libs/client'
import { Blog } from '../types/blog'
import { Grid, GridItem, Heading, Image, Text, VStack } from '@chakra-ui/react'

type Props = { blogs: Blog[] }

export default function Home({ blogs }: Props) {
  return (
    <>
      <Heading py={4} textAlign={'center'}>
        ブログ一覧
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {blogs.map((blog, index) => (
          <GridItem
            className={'keor'}
            key={`blog-${index}`}
            w={'full'}
            h={'350px'}
            borderWidth={1}
            borderRadius={4}
          >
            <Image
              src={blog.image.url}
              w={'200px'}
              h={'200px'}
              borderTopRadius={4}
            />
            <VStack p={4} alignItems={'normal'} h={'150px'} spacing={1}>
              <Text fontSize={'18px'} fontWeight={'bold'} isTruncated h={'20%'}>
                {blog.title}
              </Text>
              <Text
                fontSize={'14px'}
                color={'gray.600'}
                overflow={'hidden'}
                h={'80%'}
              >
                {blog.description}
              </Text>
            </VStack>
          </GridItem>
        ))}
      </Grid>
    </>
  )
}

export const getServerSideProps = async () => {
  const data = await client.get({ endpoint: 'blogs' })

  return {
    props: {
      blogs: data.contents,
    },
  }
}
