export function findCorrespondingLessonDataIndex(pattern,cData) {
    for (let i = 0; i < Object.keys(cData).length; i++) {
        if (cData[i].courseName == pattern ) {
            return i;
        }
    }
    return -1;
}