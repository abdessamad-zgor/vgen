import { atom, Atom, useAtom } from "jotai"
import type { Id } from "@/lib/utils"

let graphAtoms = atom<Id<{}>[]>([])
