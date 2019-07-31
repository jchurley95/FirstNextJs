import { useRouter } from 'next/router'

const Comment = () => {
  const router = useRouter()
  const { commentId } = router.query

  return <p>Comment: {commentId}</p>
}

export default Comment