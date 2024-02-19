// Bài 49
import { forwardRef } from 'react' 
import video1 from './videos/video-1.pm4'

function Video(props, ref) {

    return (

        <video
            ref={ref}
            src={video1}
            width={280}
        />

    )
}

export default forwardRef(Video)