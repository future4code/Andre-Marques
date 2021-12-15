import useProtectedPage from "../../hooks/useProtectedPage"
import {BASE_URL} from '../../constants/urls'
import { DivContainer, DivNewPost, DivPosts, DivButton, DivFooterPost } from "./Styled"
import { useEffect, useState } from "react"
import useRequestData from '../../hooks/useRequestData'

const FeedPage = () => {

    useProtectedPage()
    const posts = useRequestData([], `${BASE_URL}/posts`)

    const postCard = posts.map((post, index) => {
        return (
            <DivPosts key={index}>
                <h3>{post.username}</h3>
                <p>{post.body}</p>
                <DivFooterPost>
                    <DivButton>
                        <button>bom</button>
                        <p>{post.voteSum}</p>
                        <button>ruim</button>
                    </DivButton>
                    <div>
                        <p>{`${post.commentCount} comentários`}</p>
                    </div>
                </DivFooterPost>
            </DivPosts>
        )
    })

    return (
        <DivContainer>
            <DivNewPost>
                <input placeholder="Escreva seu post"></input>
                <button>postar</button>
            </DivNewPost>
            {postCard}
        </DivContainer>
    )
}

export default FeedPage