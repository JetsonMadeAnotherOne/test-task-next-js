import Head from 'next/head'


export function MainLayout({ children, title = 'Test Task' }) {
  return (
    <>
      <Head>
          <title>{title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
          <meta name="keywords" content="next,javascript,nextjs,react"/>
          <meta name="description" content="this is youtube tutorial for next"/>
          <meta charSet="utf-8"/>
      </Head>
      <div className={'header'}>
        <div className={'logo'}>
            <div className={'round'}/>
            <div className={'oval'}/>
        </div>
          <span className={'head-name'}>Test task</span>
      </div>
      <main>
        {children}
      </main>
    </>
  )
}