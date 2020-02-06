import React from 'react';
import { useLocation } from 'react-router-dom';
import querySring from 'query-string';
import { api } from '../../services';
import { useTMDSessionContext } from '../../context/TMDSessionContext';

function Approve() {
  const { search } = useLocation();
  const { request_token, approved } = querySring.parse(search);
  const { setSession } = useTMDSessionContext() as any;

  if (approved === 'true') {
    api
      .get(`/authentication/session/new?request_token=${request_token}`)
      .then((data) => {
        if (data.session_id) {
          localStorage.setItem('session_id', data.session_id);

          setSession({
            sessionId: data.session_id,
            isAuthenticated: true,
          });
        }
      });
    return <>'Approved'</>;
  } else {
    return <>'You must approve'</>;
  }
}

export default Approve;
