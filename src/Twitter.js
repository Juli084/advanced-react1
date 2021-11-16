import React, { useEffect, useState, memo } from "react"

const areEqual = (prevProps, nextProps) => {
    return true
}


function Twitter(props) {
    const { loading } = props
    const[tweet, setTweet] = useState('title')


    // componentDidMount
    useEffect(() => {
        const { posts, loading } = props
        console.log('componentDidMount', posts)
        console.log('componentDidMount: loading', loading)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // componentDidUpdate
    useEffect(() => {
        console.log('componentDidUpdate', loading)
    }, [loading])

    //ComponentWillUnmount
    useEffect(() => {
        return () => {
            console.log('componentWillUnmount: fui removido :(')
        }
    }, [])        

    const handleTweet = () => {
        setTweet('Tweet atualizado')
    }

        console.log('Tweet atualizado:', tweet)
        return (
           <div>
               <button onClick={handleTweet}>Re-render</button>
               testes
           </div>
        )
    
}
export default memo(Twitter, areEqual)