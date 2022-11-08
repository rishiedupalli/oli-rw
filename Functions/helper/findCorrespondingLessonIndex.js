export function findCorrespondingLessonIndex(pattern,lData,numLessons) {
    for (let i = 0; i < numLessons; i++) {
        if (lData[i].LessonTitle == pattern ) {
            return i;
        }
    }
    return -1;
}