import Head from 'next/head'

const MyHead = props => {
    return(
        <Head>
            <title>{props.pageName}</title>
      {/* interestingly with Head we can directly link to specific style sheets */}
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" />
    
        </Head>
    )
}

export default MyHead