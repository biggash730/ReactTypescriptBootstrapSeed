import * as React from 'react'

export interface FormCardProps {
  children: any
  title: string
}

const FormCard: React.SFC<FormCardProps> = ({ children, title }) => {
  return (
    <div className="row">
      <div className="col-sm-12 col-md-8 offset-md-2 col-xl-6 offset-xl-3">
        <div className="card">
          <div className="card-body mx-md-4">
            <h5 className="card-title text-uppercase text-muted ml-md-n4">{title}</h5>
            <br />
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormCard
