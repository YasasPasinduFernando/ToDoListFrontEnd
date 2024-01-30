import React from 'react';

const TaskListSection = () => {
  return (
    <section className="vh-100 gradient-custom-2">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-12 col-xl-10">

            <div className="card mask-custom">
              <div className="card-body p-4 text-white">

                <div className="text-center pt-3 pb-2">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
                    alt="Check" width="60" />
                  <h2 className="my-4">Task List</h2>
                </div>

                <table className="table text-white mb-0">
                  <thead>
                    <tr>
                      <th scope="col">Team Member</th>
                      <th scope="col">Task</th>
                      <th scope="col">Priority</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Your table rows go here */}
                  </tbody>
                </table>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskListSection;
