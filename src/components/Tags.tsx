import styled from '@emotion/styled'
import { FC } from 'react'
import { TagType } from 'types/notion'
import styles from 'utils/styles'

type TagProps = {
  tags: TagType[]
}

const Tags: FC<TagProps> = ({ tags }) => {
  return (
    <>
      <Block>
        {tags.map((tag) => (
          <Icon key={tag.id}>
            <i className={`devicon-${tag.name}-original colored`} />
          </Icon>
        ))}
      </Block>
    </>
  )
}

const Block = styled.div`
  margin: 0;
`

const Icon = styled.span`
  display: inline-block;
  margin: 0;
  ${styles.mixins.fontSize(30, 0)}
`

export default Tags
