export function findCorrespondingLessonDataIndex(pattern,cData) {
    for (let i = 0; i < 5; i++) {
        if (cData[i].courseName == pattern ) {
            return i;
        }
    }
    return 69;
}