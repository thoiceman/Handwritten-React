import { HostRoot } from './ReactWorkTags'
import { NoFlags } from './ReactFiberFlags'


export function FiberNode(tag, pendingProps, key) {
    this.tag = tag
    this.key = key
    this.type = null;
    this.stateNode = null
    this.return = null
    this.child = null;
    this.sibling = null
    this.pendingProps = pendingProps
    this.memorizedProps = null;
    this.memoizedState = null;
    this.updateQueue = null
    this.flags = NoFlags;
    this.subtreeFlags = NoFlags
    this.alternate = null;
}

export function createFiber(tag, pendingProps, key) {
    return new FiberNode(tag, pendingProps, key)
}

export function createHostRootFiber() {
    return createFiber(HostRoot, null, null)
}