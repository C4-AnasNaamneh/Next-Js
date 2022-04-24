
import { useRouter } from 'next/router'


export default function name () {
    const router = useRouter()
    const {name} = router.query
    return (
<div >
<p>{name}</p>

</div>
    )
}