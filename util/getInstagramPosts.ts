export type IG_PostType = {
  id: string
  caption: string
  permalink: string
  media_url: string
  timestamp: string
}

type getIGPostsType = () => Promise<IG_PostType[] | null>

// // /////////////////////////////////////////////////////////////////
// // Use Instagram API
// // /////////////////////////////////////////////////////////////////
// export const getInstagramPosts: getIGPostsType = async () => {
//   try {
//     const res_media = await fetch(
//       `https://graph.instagram.com/v14.0/${process.env.IG_ACCOUNT_ID}/media?access_token=${process.env.IG_TOKEN}`
//     )
//     const data_media: { data: { id: string }[] } = await res_media.json()
//     const postAmount = 5
//     const IG_posts: IG_PostType[] = await Promise.all(
//       data_media.data.slice(0, postAmount).map(async item => {
//         const res_post = await fetch(
//           `https://graph.instagram.com/${item.id}?fields=id,caption,permalink,media_url,timestamp&access_token=${process.env.IG_TOKEN}`
//         )
//         const data_post = await res_post.json()
//         return data_post
//       })
//     )
//     return IG_posts
//   } catch (e) {
//     console.log(e)
//     return null
//   }
// }

// /////////////////////////////////////////////////////////////////
// Use Mockapi
// /////////////////////////////////////////////////////////////////
export const getInstagramPosts: getIGPostsType = async () => {
  try {
    const res_media = await fetch(
      'https://62813aef1020d8520586e92e.mockapi.io/posts'
    )
    const data_media: { data: { id: string }[] }[] = await res_media.json()
    const postAmount = 5
    const IG_posts: IG_PostType[] = await Promise.all(
      data_media[0]!.data.slice(0, postAmount).map(async item => {
        const res_post = await fetch(
          `https://62813aef1020d8520586e92e.mockapi.io/media/${item.id}`
        )
        const data_post = await res_post.json()
        return data_post
      })
    )
    return IG_posts
  } catch (e) {
    console.log(e)
    return null
  }
}
