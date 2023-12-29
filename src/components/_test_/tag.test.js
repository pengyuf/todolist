import React from "react"
import { render, screen } from "@testing-library/react"
import Tag from '../Tag'

describe('标签组件', () => {
    it('test content', () => {
        const content = '标签1'
        render(<Tag content={content} />)
        expect(screen.getByText('标签1')).toBeInTheDocument()
    })

    it('test tag bg color', () => {
        const bgColor = 'red'
        render(
            <Tag content='标签1' bgColor={bgColor} />
        )
        expect(screen.getByText('标签1')).toHaveStyle(`background-color: ${bgColor}`)
    })
})