import React from 'react'

const commentsData = [
    {
        name: "Akriti Singh",
        text: "Nice video",
        replies: []
    },
    {
        name: "Akriti Singh",
        text: "Nice video",
        replies: [
            {
                name: "Akriti Singh",
                text: "Nice video",
                replies: [
                    {
                        name: "Akriti Singh",
                        text: "Nice video",
                        replies: [
                            {
                                name: "Akriti Singh",
                                text: "Nice video",
                                replies: [
                                    {
                                        name: "Akriti Singh",
                                        text: "Nice video",
                                        replies: []
                                    }
                                ]
                            },
                            {
                                name: "Akriti Singh",
                                text: "Nice video",
                                replies: [
                                    {
                                        name: "Akriti Singh",
                                        text: "Nice video",
                                        replies: []
                                    },
                                    {
                                        name: "Akriti Singh",
                                        text: "Nice video",
                                        replies: []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Akriti Singh",
        text: "Nice video",
        replies: [
            {
                name: "Akriti Singh",
                text: "Nice video",
                replies: [
                    {
                        name: "Akriti Singh",
                        text: "Nice video",
                        replies: []
                    }
                ]
            }
        ]
    },
    {
        name: "Akriti Singh",
        text: "Nice video",
        replies: []
    },
    {
        name: "Akriti Singh",
        text: "Nice video",
        replies: []
    }
];

const Comment = ({ data }) => {
    const { name, text } = data;
    return <div className='flex bg-gray-100 my-2'>
        <img className='w-12 h-12'
            alt='user'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        />
        <div className='px-2'>
            <p className='font-bold'>{name}</p>
            <p className=''>{text}</p>
        </div>
    </div>
}


const CommentsList = ({comments}) => {
    return comments.map((comment, index) => (
            <div key={index}>
                <Comment data={comment} />
                <div className='pl-5 ml-5 border border-l-black'>
                    <CommentsList comments={comment.replies} />
                </div>
            </div>
    ))
}

const CommentsContainer = () => {
    return (
        <div className='p-2 m-5'>
            <h1 className='text-2xl font-bold'>Comments:</h1>
            <CommentsList comments={commentsData} />
        </div>
    )
}

export default CommentsContainer
