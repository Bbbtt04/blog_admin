import {createPageLoadingGuard} from "./page-loading-guard";
import {createPageTitleGuard} from "./createPageTitleGuard";
import {createPermissionGuard} from "@/router/guard/permission-guard";

export function setupRouterGuard(router) {
    createPageLoadingGuard(router)
    createPageTitleGuard(router)
    createPermissionGuard(router)
}