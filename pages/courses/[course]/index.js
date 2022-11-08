import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { findCorrespondingLessonDataIndex } from '../../../Functions/helper/findCorrespondingLessonDataIndex'

function Course({ courseData }) {

    const router = useRouter()
    const courseTitle = router.query.course
    
    const lessonData = courseData[findCorrespondingLessonDataIndex(courseTitle, courseData)].lessonData

    return (
        <div className="bg-gray-100 h-screen w-screen">

            <Head>
                <title>{`Lectures on ${courseTitle}`}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <h1>Lessons For {courseTitle}</h1>
                <br />
                <ul>
                    {lessonData.map(lesson => {
                        return (
                            <li key={lesson.id}>{lesson.LessonTitle}</li>
                        )
                    })}
                </ul>
            </div>

        </div>
    )
}

export async function getStaticPaths() {
    const response = await fetch(`${process.env.URL}/courseData.json`)
    const data = await response.json()

    const paths = data.map(course => {

        return {
            params: {
                course: `${course.courseName}`
            }
        }
    })
    
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps(context) {

    const { params } = context

    const res = await fetch(
        `${process.env.URL}/courseData.json`
    )

    const data = await res.json()

    return {
        props: {
            courseData: data
        },
    }
}

export default Course