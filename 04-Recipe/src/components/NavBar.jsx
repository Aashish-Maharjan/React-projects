import {Link} from "react-router-dom"
/*using the link component from react router dom 
it will help the page from not refreshing   
so instead of refreshing the page while navigating through the pages
it will just link to the components
*/

export default  function NavBar(){
    return(
        <nav>
            <Link href="\">Home</Link>
            <Link href="\about">About</Link>

        </nav>

    )
}
