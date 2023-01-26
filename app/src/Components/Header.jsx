import { useState } from "react"
import { Link, Router } from "react-router-dom"
import { Urls } from "./Urls"

export const Header = ({autnteficate}) => {

    const [urls, setUrls] = useState(Urls)
    const [url, setUrl] = useState('Home')

    return (
        <div className="header">
            {
                Urls.map((elem, index) => {
                    const copy = Object.assign([], urls)
                    if (!autnteficate) {
                        copy[1].show = false
                        copy[2].show = false
                    }
                    if (elem.name === url) copy[index].show = false
                    if (elem.show)
                        return (
                            <Link key={elem.name} to={elem.url} onClick={() => {
                                setUrls(copy)
                                setUrl(elem.name)
                            }}>{elem.name}</Link>
                        )
                    copy[index].show = true
                })
            }
        </div>
    )
}   