import { useRouter } from 'next/router'

const PropertyList = () => {
  const router = useRouter();
  const  dateServiceType  = router.query;
    console.log(dateServiceType)

  return <p>Post: </p>
}

export default PropertyList
