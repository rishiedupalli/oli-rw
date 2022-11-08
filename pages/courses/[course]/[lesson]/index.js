import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { findCorrespondingLessonDataIndex } from '../../../../Functions/helper/findCorrespondingLessonDataIndex'
import { findCorrespondingLessonIndex } from '../../../../Functions/helper/findCorrespondingLessonIndex'


function Lesson({ courseData }) {

    const router = useRouter()
    const courseTitle = router.query.course
    const lessonTitle = router.query.lesson

    const lessonsData = courseData[findCorrespondingLessonDataIndex(courseTitle, courseData)].lessonData
    const lessonData = lessonsData[findCorrespondingLessonIndex(lessonTitle,lessonsData,courseData.numLessons)]


    return (
        <div className="bg-gray-100 h-screen w-screen">

            <Head>
                <title>{`Lectures on ${courseTitle}`}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <h1>Lesson For {lessonTitle}</h1>
                <br />
                <ul>
                </ul>
            </div>

        </div>
    )
}

export async function getStaticPaths() {
    const response = await fetch(`${process.env.URL}/courseData.json`)
    const data = await response.json()

    const paths = data.map(course => {
        return course.lessonData.map(l => {
            return {
                params: {
                    course: `${course.courseName}`,
                    lesson: `${l.LessonTitle}`
                }
            }
        })
    }).flat()
    
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

export default Lesson