import React from 'react';
import { useState } from 'react';
import data from '../public/courseData.json';

const SearchTable = () => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div>
            <div className="flex rounded items-center justify-center p-5">
                <input className="px-4 py-2 w-3/4 text-center border-black border-2 text-black" type="text" placeholder="Search our courses" onChange={(e) => {setSearchTerm(e.target.value)}} />
            </div>
            <div className='p-5 flex rounded items-center justify-center'>
                <table className='table-fixed border-collapse p-5'>
                    <thead>
                        <tr>
                            <th className='text-left border-2 p-2'>Course Title</th>
                            <th className='text-left border-2 p-2'>Level</th>
                            <th className='text-left border-2 p-2'>Prerequisite</th>
                            <th className='text-left border-2 p-2'>Textbooks</th>
                            <th className='text-left border-2 p-2'>Course Description</th>
                            <th className='text-left border-2 p-2'>Syllabus</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.filter(val => {
                            if (searchTerm === '') {
                                return val;
                            } else if (val.courseName.toLowerCase().includes(searchTerm.toLowerCase()) || val.CourseDescription.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val;
                            }
                        }).map(course => (
                            <tr key={course.id}>
                                <td className='border-2 p-2 font-extrabold text-center'><a href={`/courses/${course.courseName}`}>{course.courseName}</a></td>
                                <td className='border-2 p-2 text-left'>{course.Level}</td>
                                <td className='border-2 p-2 text-left'>{course.Prerequisites}</td>
                                <td className='border-2 p-2 text-left'>{course.Textbooks}</td>
                                <td className='border-2 p-2 text-left'>{course.courseDescription}</td>
                                <td className='border-2 p-2 text-left'>{course.Syllabus}</td>
                            </tr> 
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default SearchTable