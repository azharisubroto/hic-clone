export default function LineSeparator() {
  return (
    <>
      <div className="line-separator text-center">
        <img src="/static/img/line-separator.svg" alt="Separator" className="img-fluid" />
      </div>

      {/* Style */}
      <style jsx>
        {`
          .line-separator {
            margin: 40px 0;
          }
        `}
      </style>
    </>
  )
}
