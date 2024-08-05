import React from 'react'
import Table from '../../Components/Table/Table'
import RatioList from '../../Components/RatioList/RatioList'

interface Props {}

/**
 * The design page.
 * @param props 
 * @returns 
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DesignPage = (props: Props) => {
  return (
    <>
        <h1>Design Page</h1>
        <h2>
            Design page meant to house design aspects of the app.
        </h2>
        <RatioList/>
        <Table/>
    
    </>
  )
}

export default DesignPage