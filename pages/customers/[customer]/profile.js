import { useRouter } from 'next/router'

const Profile = () => {
  const router = useRouter()
  const { customer } = router.query

  return <p>Profile for {customer}</p>
}

export default Profile