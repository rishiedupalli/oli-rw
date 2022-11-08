import React from 'react';
import { useState } from 'react';
import data from '../public/courseData.json';

const SearchTable = () => {
    const [searchTerm, setSearchTerm] = useState("");

    function dataComparator(a,b) {
        if (a.Field > b.Field) {
            return a
        } else {
            return parseInt(a.courseNumber) - parseInt(b.courseNumber)
        }

    }

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
                            <th className='text-left border-2 p-2'>Course Number</th>
                            <th className='text-left border-2 p-2'>Level</th>
                            <th className='text-left border-2 p-2'>Prerequisite(s)</th>
                            <th className='text-left border-2 p-2'>Textbook(s)</th>
                            <th className='text-left border-2 p-2'>Course Description</th>
                            <th className='text-left border-2 p-2'>Syllabus</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.sort(dataComparator).filter(val => {
                            if (searchTerm === '') {
                                return val;
                            } else if (val.courseName.toLowerCase().includes(searchTerm.toLowerCase()) || val.Field.toLowerCase().includes(searchTerm.toLowerCase()) || val.courseNumber.includes(searchTerm)) {
                                return val;
                            }
                        }).map(course => (
                            <tr key={course.id}>
                                <td className='border-2 p-2 font-extrabold text-left'><a href={`/courses/${course.courseName}`}>{course.courseName}</a></td>
                                <td className='border-2 p-2 text-left'>{course.Field.toUpperCase()}{course.courseNumber}</td>
                                <td className='border-2 p-2 text-left'>{course.Level}</td>
                                <td className='border-2 p-2 text-left'>{course.Prerequisites}</td>
                                <td className='border-2 p-2 text-left'>{course.Textbooks}</td>
                                <td className='border-2 p-2 text-left'>{course.CourseDescription}</td>
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