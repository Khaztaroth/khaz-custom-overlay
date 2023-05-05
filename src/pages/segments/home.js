import { useEffect, useState } from "react";
import Select from 'react-select';

export default function Home(){
    const useInput = (defaultValue) => {
        const [value, setValue] = useState(defaultValue);
        function onChange(e) {
          setValue(e.target.value);
        }
        return {
          value,
          onChange,
        };
    }

    const [url, setUrl] = useState(window.location.origin)
    useEffect(() => {
        setUrl(window.location.origin)
        console.log(url)
    }, [url])

    
    const copy = async () => {
        await navigator.clipboard.writeText(chatUrl);
        alert('Text copied');
    }

    const options = [
        {label: 'art', value: 'art'},
        {label: 'games', value: 'games'}
    ]

    const [overlayOption, setOverlayOption] = useState('')
    const [chatOption, setChatOption] = useState('')
    const [overlayUrl, setOverlayUrl] = useState('')
    
    const input = useInput('')
    
    useEffect(() => {
        setOverlayUrl(`${url}/chat?channel=${input.value}&${overlayOption? overlayOption:''}`)
    }, [overlayOption, overlayUrl])

    return (
        <div>
            <div style={{marginTop: '2rem', marginBottom:'2rem'}}>
            <div>Input your channel name bellow</div>
            <input {...input} placeholder="Channel Name" />
            <div>Overlay?<Select options={options} onChange={opt => overlayOption = opt}/></div>
            </div>
            <div style={{marginTop:'2rem'}}>
            <div>Click the button to copy the url and use chat in OBS or navigate to it to check it in your browser</div>
            <a style={{marginRight:'1rem'}} href={chatUrl} target="_blank">{chatUrl}</a><button onClick={copy}>Copy</button>
            <div>Click the button to copy the url and use an overlay in OBS or navigate to it to check it in your browser</div>
            <a style={{marginRight:'1rem'}} href={chatUrl} target="_blank">{chatUrl}</a><button onClick={copy}>Copy</button>
            </div>
        </div>
    )
}