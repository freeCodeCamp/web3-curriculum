export function toggleLoaderAnimation(ws) {
  ws.send(parse({ event: 'toggle-loader-animation' }));
}

export function updateTests(ws, tests) {
  ws.send(parse({ event: 'update-tests', data: { tests } }));
}
export function updateTest(ws, test) {
  ws.send(parse({ event: 'update-test', data: { test } }));
}

export function updateDescription(ws, description) {
  ws.send(parse({ event: 'update-description', data: { description } }));
}

export function updateProjectHeading(ws, projectHeading) {
  ws.send(
    parse({
      event: 'update-project-heading',
      data: projectHeading
    })
  );
}

export function updateProject(ws, project) {
  ws.send(
    parse({
      event: 'update-project',
      data: project
    })
  );
}

export function updateHints(ws, hints) {
  ws.send(parse({ event: 'update-hints', data: { hints } }));
}

export function updateConsole(ws, cons) {
  ws.send(parse({ event: 'update-console', data: { cons } }));
}

export function parse(obj) {
  return JSON.stringify(obj);
}
