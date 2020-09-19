import React from 'react'
import PropTypes from 'prop-types'

const Item = ({children}) => <h1 className="title">{children}</h1>

Item.propTypes = {
    children: PropTypes.string.isRequired
}

export default Title