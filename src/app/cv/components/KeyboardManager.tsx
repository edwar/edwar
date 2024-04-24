"use client"
import { useEffect, useState } from "react"
import { Command, CommandInput, CommandList } from "superkey"
import { SlPrinter, SlSocialLinkedin, SlSocialTwitter, SlSocialGithub } from "react-icons/sl"
import { BsCommand } from "react-icons/bs"

export default function KeyboardManager() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  // Actions =>
  const actions = [
    {
      id: 1,
      name: "Imprimir",
      icon: <SlPrinter size={18} />,
      shortcut: ["Cmd", "+", "P"],
      action: () => {
        setOpen(false)
        setTimeout(() => {
          window.print()
        }, 300);
      },
    },{
      id: 2,
      name: "Linkein",
      icon: <SlSocialLinkedin size={18} />,
      action: () => {
        setOpen(false)
        window.open("https://www.linkedin.com/in/edwaramaya/")
      },
    },{
      id: 3,
      name: "X",
      icon: <SlSocialTwitter size={18} />,
      action: () => {
        setOpen(false)
        window.open("https://x.com/https://twitter.com/ed_amaya_diaz")
      },
    },{
      id: 4,
      name: "GitHub",
      icon: <SlSocialGithub size={18} />,
      action: () => {
        setOpen(false)
        window.open("https://github.com/edwar")
      },
    },
  ];

  // Ctrl+k to open command =>
  useEffect(() => {
    function handleKeyDown(event?: KeyboardEvent) {
      if (event?.key === "k" && (event?.metaKey || event?.ctrlKey)) {
        event?.preventDefault();
        setOpen(!open);
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [open]);

  // Filter data =>
  const filteredData = query
    ? actions.filter((action) =>
        action.name.toLowerCase().includes(query.toLowerCase())
      )
    : actions;

  return (
    <>
      <div className="no-print fixed inset-0 py-4 h-14 w-28 lg:inline-flex hidden gap-1 left-1/2 -translate-x-1/2">
        <kbd className="flex justify-center items-center gap-1 w-14 px-2 py-1.5 text-xs font-semibold border rounded-lg bg-gray-600 text-gray-100 border-gray-500"><BsCommand size={15} />Cmd</kbd>
        <kbd className="flex justify-center items-center gap-1 w-7 px-2 py-1.5 text-xs font-semibold border rounded-lg bg-gray-600 text-gray-100 border-gray-500">+</kbd>
        <kbd className="flex justify-center items-center gap-1 w-7 px-2 py-1.5 text-xs font-semibold border rounded-lg bg-gray-600 text-gray-100 border-gray-500">K</kbd>
      </div>
      <div role="none" onClick={() => setOpen(true)} className="fixed inset-0 py-4 h-14 w-28 cursor-pointer inline-flex lg:hidden gap-1 left-1/2 -translate-x-1/2">
        <button className="flex justify-center items-center gap-1 w-24 px-2 py-1.5 text-xs font-semibold border rounded-lg bg-gray-600 text-gray-100 border-gray-500">Commandos</button>
      </div>
      <Command
        open={open}
        onClose={() => setOpen(false)}
        afterLeave={() => {
          setQuery("");
        }}
        commandFunction={() => {
          setOpen(false);
        }}
      >
        <CommandInput
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setQuery(e.target.value);
          }}
        />
        <CommandList>
          {filteredData.map((example) => (
            <div
              role="none"
              key={example.id}
              onClick={example.action}
              className="px-3 py-1 cursor-pointer bg-zinc-700/25 hover:bg-zinc-700"
            >
              <div className="flex items-center justify-between py-1 space-x-1">
                <div className="flex items-center space-x-1">
                  <div className="mr-2">{example.icon}</div>
                  <h1>{example.name}</h1>
                </div>
                <div className="flex items-center space-x-1">
                  {example.shortcut?.map((shortcut) => (
                    <span
                      key={shortcut}
                      className="p-2 text-xs border rounded-md text-gray-200 bg-zinc-900  border-zinc-800"
                    >
                      {shortcut}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </CommandList>
      </Command>
    </>
  );
}
