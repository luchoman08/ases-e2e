import * as qs from 'qs';



export function generateUrl(baseUrl: string, path: string, courseId?: string|number, instanceId?:string|number): string{
    var params = {};
    if(courseId) {
        params['courseid'] = courseId;
    }
    if(instanceId){
        params['instanceid'] = instanceId;
    }
    var paramsString = '';
    if(params !== {}) {
        paramsString = qs.stringify(params);
    }
    return `${baseUrl}/${path}?${paramsString}`;
}