import {DependencyList, useEffect} from "react";

export function useAsyncEffect(
    effect: () => Promise<void | (() => void)>,
    dependencies: DependencyList = []
) {
    useEffect(() => {
        let isMounted = true;

        const executeEffect = async () => {
            const cleanup = await effect();
            if (isMounted && cleanup) {
                return cleanup;
            }
        };

        const cleanupWrapper = executeEffect();

        return () => {
            isMounted = false;
            if (cleanupWrapper instanceof Promise) {
                cleanupWrapper.then((cleanup) => {
                    if (typeof cleanup === "function") cleanup();
                });
            }
        };
    }, dependencies);
}
