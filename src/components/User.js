import React from 'react'

export const User = ({ user }) => (

<div className="well span8">
<div className="row-fluid user-row">
    <div className="span1">
        <img className="img-circle"
             src={user.avatarUrl}
             alt="User Pic" />
    </div>
    <div className="span10">
        <strong>{user.displayName}</strong><br/>
        <span className="text-muted">User level: User</span>
    </div>
    <div className="span1 dropdown-user" data-for=".cyruxx">
        <i className="icon-chevron-down text-muted"></i>
    </div>
</div>
<div className="row-fluid user-infos cyruxx">
    <div className="span10 offset1">
        <div className="panel panel-primary">
            <div className="panel-heading">
                <h3 className="panel-title">User information</h3>
            </div>
            <div className="panel-body">
                <div className="row-fluid">
                    <div className="span3">
                        <img className="img-circle"
                             src={user.avatarUrl}
                             alt="User Pic" />
                    </div>
                    <div className="span6">
                        <strong>Cyruxx</strong><br/>
                        <table className="table table-condensed table-responsive table-user-information">
                            <tbody>
                            <tr>
                                <td>User level:</td>
                                <td>User</td>
                            </tr>
                            <tr>
                                <td>FirstName:</td>
                                <td>{user?.firstName}</td>
                            </tr>
                            <tr>
                                <td>LastName:</td>
                                <td>{user?.lastName}</td>
                            </tr>
                            <tr>
                                <td>DisplayName:</td>
                                <td>{user?.displayName}</td>
                            </tr>
                            <tr>
                                <td>Location:</td>
                                <td>{user?.location}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</div>
</div>
)
